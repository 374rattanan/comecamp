'use client'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'อุทยานแห่งชาติดอยผ้าห่มปก',
  href: '#',
  images: [
    {
      src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSXjyPIR776PmObkk-Hu4Da5oEO29wvSzGvab1AJ8v504URWs-4K29bTJJ9BmpYk-WavaxQqvabyZWbHNTk1q97aFc6GfGUWyqSKA6LjQ',
    },
    {
      src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQE40kAfcCgPTZ7eX3uAwHqeXGfbzDDPSGBjqFZ5mTDXXGh2E95My5QdMPL1HXJH0-9cjteJJ9JyCxGrQvAuzrrXu0DK-brTgyneN--EEM',
    },
    {
      src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT_M6JXeZl_QeMjKTYfbyNU_HJ1BrA01SGxuhHY7ZNFTJhUqF987Tsay7NkVzkWJ5dUPwVL87i9Nrnk7eOnc7haL3pNJsmhT3VmNu580Q',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSlLMZbUFBhhvOjCZFoBtQPu3kSZ9xIz2MC6u0DvEm8NGpfB-VDiQxgSQlGAr6hLiXo7sgQBv0jIxqZzQfMI4SSinGLbYF-cBm1QJo1ZA',
    },
  ],
  description: 'ดอยผ้าห่มปก ตั้งอยู่ใน อุทยานแห่งชาติดอยผ้าห่มปก มียอดดอยที่สูงที่สุดเป็นอันดับ 2 ของประเทศไทย ด้วยความสูงถึง 2,285 เมตร ที่นี่จึงเป็นทั้งจุดชมทะเลหมอก พระอาทิตย์ขึ้นและตกดินที่สวยงาม อีกทั้งยังมีอากาศหนาวเย็นตลอดทั้งปี อีกความอุดมสมบูรณ์ของธรรมชาติทำให้ที่นี่เป็นที่อยู่อาศัยของสัตว์และพันธุ์ไม้หายาก',
  highlights: [
    'มีต้นไม้ดอกไม้สวย ๆ หลากหลายสายพันธุ์',
    'มีผีเสื้อมรกตผ้าห่มปก ซึ่งพบที่นี่แห่งเดียวเท่านั้นในประเทศไทย',
    'ทะเลหมอก',
    'มีบ่อน้ำร้อนธรรมชาติ',
  ],
  details: 'ห่างจากยอดดอยไปประมาณ 3 กิโลเมตรจะเป็นมี ลานกางเต็นท์ดอยกิ่วลม สำหรับรองรับนักท่องเที่ยวให้ได้นอนพักชมวิวสวยๆ แบบ 360 องศา และอีกจุดหนึ่งคือตรง ลานกางเต็นท์บ่อน้ำร้อน ใกล้ๆ กับที่ทำการอุทยานฯ',
}

const initialReviews = [
  {
    rating: 4,
    text: "ที่นี่สวยงามมาก มีอากาศเย็นสบาย และวิวทิวทัศน์ของทะเลหมอกทำให้รู้สึกผ่อนคลาย การกางเต็นท์ก็สะดวกสบาย",
    author: 'นักท่องเที่ยว',
  },
  {
    rating: 5,
    text: "ยอดเยี่ยมมาก! ธรรมชาติอุดมสมบูรณ์และการบริการดีเยี่ยม ขอบคุณมาก",
    author: 'นักท่องเที่ยว',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [reviews, setReviews] = useState(initialReviews)

  const handleSubmitReview = (e) => {
    e.preventDefault()

    if (rating === 0 || reviewText.trim() === '') {
      alert('กรุณาเลือกคะแนนและกรอกความคิดเห็น')
      return // ป้องกันการส่ง
    }

    const newReview = {
      rating,
      text: reviewText,
      author: 'นักท่องเที่ยว',
    }

    setReviews((prevReviews) => [...prevReviews, newReview])
    setRating(0)
    setReviewText('')
  }

  return (
    <div className="bg-gray-950">
      <div className="pt-6">
        {/* แกลเลอรีภาพ */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* ข้อมูลผลิตภัณฑ์ */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-lime-500 sm:text-3xl">{product.name}</h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* คำอธิบายและรายละเอียด */}
            <div>
              <h3 className="sr-only">คำอธิบาย</h3>
              <div className="space-y-6">
                <p className="text-slate-200">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-lime-500">จุดเด่น</h3>
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-white">
                      <span className="text-white">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* ภาพจุดเด่นด้านขวา */}
                <div className="lg:col-span-1 lg:pl-20">
                  <img
                    src={product.images[1].src}
                    className="h-auto w-full max-w-[400px] max-h-[400px] object-cover object-center rounded-lg"
                    alt="Highlight image"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* ภาพรายละเอียดด้านซ้าย */}
                <div className="lg:col-span-1 lg:pr-20">
                  <img
                    src={product.images[3].src}
                    className="h-auto w-full max-w-[400px] max-h-[400px] object-cover object-center rounded-lg"
                    alt="Highlight image"
                  />
                </div>

                <div className="lg:col-span-1">
                  <h3 className="text-sm font-medium text-lime-500">รายละเอียด</h3>
                  <p className="text-sm text-white">{product.details}</p>
                  <form className="mt-10">


                    <button
                      type="button"
                      onClick={() => (window.location.href = '/booking')}
                      className="mt-10 flex w-sm items-center justify-center rounded-md bg-lime-700 px-8 py-4 text-white font-bold hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      จองลานกางเต็นท์
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-20">
              <h3 className="text-xl font-bold text-lime-500">กิจกรรมที่แนะนำ</h3>
              <div className="w-full border-b border-white mt-5 shadow-lg shadow-white" />
              <ul className="mt-7 flex flex-wrap justify-center gap-10">
                {/* รายการกิจกรรม */}
                <li className="flex flex-col items-center text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3867/3867773.png"
                    alt="เดินป่าศึกษาธรรมชาติ"
                    className="mb-3 h-8 w-auto" // ขนาดของไอคอน
                  />
                  เดินป่าศึกษาธรรมชาติ
                </li>
                <li className="flex flex-col items-center text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1729/1729002.png" // URL ของไอคอนดูนก
                    alt="ดูนก"
                    className="mb-3 h-8 w-auto" // ขนาดของไอคอน
                  />
                  ดูนก
                </li>
                <li className="flex flex-col items-center text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1600/1600565.png" // URL ของไอคอนแช่น้ำร้อนธรรมชาติ
                    alt="ตั้งแคมป์"
                    className="mb-3 h-8 w-auto" // ขนาดของไอคอน
                  />
                  ตั้งแคมป์
                </li>
                <li className="flex flex-col items-center text-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3506/3506533.png" // URL ของไอคอนชมทะเลหมอก
                    alt="ชมทะเลหมอก"
                    className="mb-3 h-8 w-auto" // ขนาดของไอคอน
                  />
                  ชมทะเลหมอก
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold text-lime-500">กรอกรีวิว</h2>
                <div className="bg-gray-900 rounded-lg p-6 mt-4">
                  <form onSubmit={handleSubmitReview}>
                    <div>
                      <label className="block text-md font-medium text-white">คะแนน</label>
                      <div className="mt-2 flex">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={classNames(
                              rating > index ? 'text-yellow-400' : 'text-gray-600',
                              'h-8 w-8 cursor-pointer'
                            )}
                            onClick={() => setRating(index + 1)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-md font-medium text-white">ความคิดเห็น</label>
                      <textarea
                        required
                        rows={4}
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring focus:ring-lime-500 focus:ring-opacity-50"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 flex w-full justify-center rounded-md bg-lime-700 px-4 py-2 text-white font-bold hover:bg-lime-500"
                    >
                      ส่งรีวิว
                    </button>
                  </form>
                </div>
              </div>

              <h2 className="text-xl font-bold text-lime-500 mt-10">รีวิว</h2>
              <div className="bg-gray-900 rounded-lg p-6 mt-4">
                {reviews.length > 0 ? (
                  <ul className="space-y-4">
                    {reviews.map((review, index) => (
                      <li key={index} className="border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-gray-400">{review.author}</span>
                        </div>
                        <p className="text-white">{review.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">ยังไม่มีรีวิว</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
