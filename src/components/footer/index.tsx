import React from 'react'
import SmileIcon from '../commons/icons/smileIcon'
import MentionIcon from '../commons/icons/mentionIcon'
import AirplaneIcon from '../commons/icons/airplaneIcon'

const Footer = () => {
    return (
        <div>
            <div className='py-[14px] border-t-[1px] '>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <SmileIcon />
                        <div>
                            <input type="text"
                                placeholder='Start typing...'
                                className=''
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <MentionIcon />
                        <AirplaneIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer