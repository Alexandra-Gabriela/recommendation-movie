import React from 'react'

const Loading = () => {
return (  <div> 
        <br/><br/><br/>
        <div className="flex justify-center h-screen">
            <div className="relative w-80 h-80 rounded-lg bg-red-800">
                    <div className="absolute circle "></div>
                    <div className="absolute circle animate-bounce delay-200" style={{ left: '40%' }}></div>
                    <div className="absolute circle animate-bounce delay-400" style={{ left: '60%' }}></div>
                <div className="absolute shadow "></div>
                <div className="absolute shadow animate-bounce delay-200" style={{ left: '40%' }}></div>
                <div className="absolute shadow animate-bounce delay-400 right-16" style={{ left: '60%' }}></div>
</div>
</div>

        </div>
);
}

export default Loading
