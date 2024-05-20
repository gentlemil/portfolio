'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import deleteMessage from '@/app/actions/deleteMessage'
import answeredMessage from '@/app/actions/answeredMessage'

import Spinner from '@/components/Spinner'
import { toast } from 'react-toastify'

import { FaRegTrashAlt } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { RxCrossCircled } from 'react-icons/rx'
import { AiOutlineMessage } from 'react-icons/ai'

const UserMessagesPage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages')

        if (res.status === 200) {
          const data = await res.json()
          setMessages(data.messages)
        }
      } catch (error) {
        console.error('error', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const handleAnsweredMessage = async (id, is_read) => {
    const confirmed = window.confirm(
      'Are you sure you responded to this message?'
    )

    if (!confirmed) return

    setLoading(true)
    const answeredMessageId = answeredMessage.bind(null, id, is_read)
    await answeredMessageId()

    toast.success('Success!')

    setLoading(false)
  }
  const handleDeleteMessage = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this message?'
    )

    if (!confirmed) return

    setLoading(true)
    const deleteMessageId = deleteMessage.bind(null, id)
    await deleteMessageId()

    toast.success('Message deleted successfully')

    const updatedMessages = messages.filter((message) => message._id !== id)

    setMessages(updatedMessages)
    setLoading(false)
  }

  return (
    <section className='container mx-auto relative'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-10 px-4'>
        <span className='text-mint'>messages</span>
      </h2>

      {loading && <Spinner loading={loading} />}

      {!loading && messages.length === 0 && (
        <p className='text-center italic font-thin tracking-wider'>no data</p>
      )}

      {!loading && messages.length > 0 && (
        <div className='text-gray-200 italic tracking-wider font-thin overflow-hidden'>
          <table className='table w-full overflow-scroll'>
            <thead className='border-b border-mint text-center tracking-wider'>
              <tr>
                <th className='px-2 pb-2'>Lp</th>
                <th className='px-2 pb-2 !w-[100px]'>Name</th>
                <th className='px-2 pb-2 !w-[500px]'>Message</th>
                <th className='px-2 pb-2'>Email</th>
                <th className='px-2 pb-2'>Phone</th>
                <th className='px-2 pb-2'>Is read</th>
                <th className='px-2 pb-2'>Sent</th>
                <th className='px-2 pb-2'>Options</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr
                  key={message._id}
                  className='hover:bg-mint/10 text-center transition-all border-b border-mint/20'
                >
                  <td className='px-2'>{index + 1}</td>
                  <td className='px-2 '>{message.name}</td>
                  <td className='px-2 whitespace-wrap py-1'>
                    {message.message}
                  </td>
                  <td className='px-2 whitespace-wrap'>{message.email}</td>
                  <td className='px-2 whitespace-wrap'>{message.phone}</td>
                  <td className='px-2'>
                    <button
                      type='button'
                      onClick={() =>
                        handleAnsweredMessage(message._id, message.is_read)
                      }
                      className='w-full flex justify-center items-center'
                    >
                      {message.is_read ? (
                        <GiConfirmed
                          size={'1.25rem'}
                          className='text-green-200 text-center'
                        />
                      ) : (
                        <RxCrossCircled
                          size={'1.25rem'}
                          className='text-red-500'
                        />
                      )}
                    </button>
                  </td>
                  <td className='px-2 whitespace-wrap'>
                    {new Date(message.createdAt).toLocaleString()}
                  </td>
                  <td className='px-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <button
                        type='button'
                        onClick={() => router.push(`mailto:${message.email}`)}
                      >
                        <AiOutlineMessage
                          size={'1.25rem'}
                          className='text-gray-200 hover:text-mint transition-all'
                        />
                      </button>

                      <button
                        type='button'
                        onClick={() => handleDeleteMessage(message._id)}
                      >
                        <FaRegTrashAlt
                          size={'1.25rem'}
                          className='text-gray-200 hover:text-mint transition-all'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default UserMessagesPage
