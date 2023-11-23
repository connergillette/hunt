import Status from './Status'

interface Props {
  app: object,
  updateStatus?: Function,
  index?: number,
}

export default function StatusChain({ app, updateStatus, index } : Props) {
  return (
    <div className="flex gap-2 grow whitespace-nowrap justify-end max-lg:flex-wrap">
      <div>
        <Status status={app.with_referral ? "good" : "neutral"} appId={app.id}>{app.with_referral ? (app.referrer || 'Referred') : 'No referral'}</Status>
      </div>
      <div>
        <Status status={app.submitted ? "good" : "neutral"} field="submitted" appId={app.id} updateFunction={() => { updateStatus && updateStatus('submitted', index) }}>{app.submitted ? 'Submitted' : 'Not submitted'}</Status>
      </div>
      <div>
        {app.submitted && app.interviewed == null && <Status status="neutral" field="interviewed" updateFunction={() => { updateStatus && updateStatus('interviewed', index) }} appId={app.id}>Pending response</Status>}
        {
          app.submitted && app.interviewed != null && (
            <Status status={app.interviewed ? 'good' : 'bad'} field="interviewed" appId={app.id} updateFunction={() => { updateStatus && updateStatus('interviewed', index) }}>{app.interviewed ? 'Interviewed' : 'No interview'}</Status>
          )
        }
      </div>
      <>
        {app.interviewed && app.received_offer == null && (<Status status="neutral" field="received_offer" appId={app.id} updateFunction={() => { updateStatus && updateStatus('received_offer', index) }}>Pending offer</Status>)}
        {app.interviewed && app.interviewed && app.received_offer != null && (
          <Status status={app.receieved_offer ? 'good' : 'bad'} field="received_offer" appId={app.id} updateFunction={() => { updateStatus && updateStatus('received_offer', index) }}>{app.received_offer ? 'Received offer' : 'No offer'}</Status>
        )}
      </>
    </div>
  )
}