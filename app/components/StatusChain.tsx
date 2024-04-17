import { useState } from 'react'
import Status from './Status'
import { useOutletContext } from '@remix-run/react'

interface Props {
  app: object,
  updateStatus?: Function,
  index?: number,
  center?: boolean
}

export default function StatusChain({ app, updateStatus, index, center } : Props) {
  const { supabase, session } = useOutletContext()

  const [withReferral, setWithReferral] = useState(app.with_referral)
  const [referrer, setReferrer] = useState(app.referrer)
  const [submitted, setSubmitted] = useState(app.submitted)
  const [interviewed, setInterviewed] = useState(app.interviewed)
  const [receivedOffer, setReceivedOffer] = useState(app.received_offer)

  const updateFunctionMap = {
    withReferral: setWithReferral,
    referrer: setReferrer,
    submitted: setSubmitted,
    interviewed: setInterviewed,
    receivedOffer: setReceivedOffer,
  } 

  const handleClick = async (field) => {
    console.log('click!')
    const { error: fetchError, data } = await supabase.from('job_applications').select(field).eq('id', app.id).eq('user_id', session.user.id)
    
    const updatePayload = { updated_at: 'now()' }
    updatePayload[field] = !data[0][field]

    await supabase.from('job_applications').update(updatePayload).eq('id', app.id).eq('user_id', session.user.id)

    updateFunctionMap[field](!data[0][field])
  }

  return (
    <div className={`flex gap-2 whitespace-nowrap ${center ? 'justify-center' : 'justify-end'} max-lg:flex-wrap`}>
      <div>
        <Status status={withReferral ? "good" : "neutral"}>{withReferral ? (referrer || 'Referred') : 'No referral'}</Status>
      </div>
      <div>
        <Status status={submitted ? "good" : "neutral"} updateFunction={() => handleClick('submitted')}>{submitted ? 'Submitted' : 'Not submitted'}</Status>
      </div>
      <div>
        {submitted && interviewed == null && <Status status="neutral" updateFunction={() => handleClick('interviewed')} appId={app.id}>Pending response</Status>}
        {
          submitted && interviewed != null && (
            <Status status={interviewed ? 'good' : 'bad'} updateFunction={() => handleClick('interviewed')}>{interviewed ? 'Interviewed' : 'No interview'}</Status>
          )
        }
      </div>
      <>
        {interviewed && receivedOffer == null && (<Status status="neutral" field="received_offer" appId={app.id} updateFunction={() => handleClick('received_offer')}>Pending offer</Status>)}
        {interviewed && interviewed && receivedOffer != null && (
          <Status status={receivedOffer ? 'good' : 'bad'} field="received_offer" appId={app.id} updateFunction={() => handleClick('received_offer')}>{receivedOffer ? 'Received offer' : 'No offer'}</Status>
        )}
      </>
    </div>
  )
}