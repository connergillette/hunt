import { cssBundleHref } from "@remix-run/css-bundle"
import { json, V2_MetaFunction, type LinksFunction, type LoaderArgs } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react"
import { createBrowserClient, createServerClient } from '@supabase/auth-helpers-remix'

import styles from "./tailwind.css"
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import HomePage from './components/HomePage'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Hunt" },
    { name: "description", content: "Job application tracking." },
  ];
};

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'},
  { rel: 'stylesheet', href: styles },
];

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response()

  const supabase = createServerClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '', {
    request,
    response,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  }

  return json({ env, session }, { headers: response.headers })
}

export default function App() {
  const { env, session } = useLoaderData()
  const { revalidate } = useRevalidator()
  const [supabase] = useState(() => createBrowserClient(env.SUPABASE_URL, env.SUPABASE_KEY))

  const serverAccessToken = session?.access_token

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        // server and client are out of sync.
        revalidate()
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [serverAccessToken, supabase, revalidate])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-800 text-white">
        <div className="w-full fixed bg-gray-800/90 border-b-[1px] border-gray-700 border-solid h-14 flex justify-center">
          <Nav session={session} signOut={() => supabase.auth.signOut()} />
        </div>
        <div className="w-8/12 min-w-[1200px] max-md:w-11/12 max-md:min-w-[300px] mx-auto max-md:mt-2 max-md:pb-0 max-md:h-full flex flex-col pt-16 h-screen">
          <Outlet context={{ supabase, session }} />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
