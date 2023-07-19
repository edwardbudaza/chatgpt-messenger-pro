import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white"> 
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className='h-8 w-8'/>
            <h2>
              Examples
            </h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">&ldquo;Explain Something to me&ldquo;</p>
            <p className="infoText">
              &ldquo;What is the difference between a dog and a cat&ldquo; 
            </p>
            <p className="infoText">&ldquo;What is the color of the sun?&ldquo;</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className='h-8 w-8'/>
            <h2>
              Capabilities
            </h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Remembers what user said earlier in the conversation</p>
            <p className="infoText">
            Allows user to provide follow-up corrections 
            </p>
            <p className="infoText">Trained to decline inappropriate requests</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>
              Limitations
            </h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">May occasionally generate incorrect information</p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;