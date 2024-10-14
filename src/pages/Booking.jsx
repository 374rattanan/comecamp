import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaShoppingCart } from 'react-icons/fa'; // ใช้ไอคอนจาก react-icons
import { useNavigate } from 'react-router-dom';

const CalendarComponent = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
        onDateChange(date);
    };

    return (
        <div className="bg-white text-black p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">เลือกวัน:</h2>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
    );
};

// Component สำหรับแบบฟอร์มลงทะเบียน
const RegistrationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        contactPerson: '',
        contactPhone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">ลงทะเบียน</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-black">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold text-black">ชื่อ</label>
                    <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold text-black">นามสกุล</label>
                    <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-black">อีเมล</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold text-black">เบอร์โทร</label>
                    <input
                        id="phone-number"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="contact-person" className="block text-sm font-semibold text-black">บุคคลที่สามารถติดต่อได้ (ชื่อ)</label>
                    <input
                        id="contact-person"
                        name="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-black">เบอร์โทรศัพท์ของบุคคลที่ติดต่อได้</label>
                    <input
                        id="contact-phone"
                        name="contactPhone"
                        type="tel"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    ลงทะเบียน
                </button>
            </form>
        </div>
    );
};

// Component สำหรับการเลือกอุปกรณ์และการแสดงตะกร้า
const RentalItems = ({ onUpdate, cartCount, setCartCount }) => {
    const rentalItems = [
        { id: 1, name: 'เต็นท์ขนาด 3 คน', price: 225 },
        { id: 2, name: 'เต็นท์ขนาด 2 คน', price: 150 },
        { id: 3, name: 'ถุงนอน', price: 30 },
        { id: 4, name: 'ผ้าห่ม', price: 20 },
        { id: 5, name: 'แผ่นรองนอน', price: 20 },
        { id: 6, name: 'เสื่อ', price: 10 },
        { id: 7, name: 'หมอน', price: 40 },
        { id: 8, name: 'ผ้าใบ', price: 40 },
    ];

    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        setCartCount(cartCount + 1);
        onUpdate(item.price);
    };

    const handleRemoveFromCart = (item) => {
        setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
        setCartCount(cartCount - 1);
        onUpdate(-item.price);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black mb-4">เลือกอุปกรณ์เสริม</h2>
            {rentalItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                    {!cart.some((cartItem) => cartItem.id === item.id) ? (
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-lime-500 hover:bg-lime-700 text-white py-1 px-3 rounded"
                        >
                            เพิ่ม {item.name} - {item.price} บาท
                        </button>
                    ) : (
                        <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="bg-red-500 hover:bg-red-400 text-white py-1 px-3 rounded"
                        >
                            ลบ {item.name}
                        </button>
                    )}
                </div>
            ))}

            {/* Display Cart Items */}
            <div className="mt-6 bg-gray-300 p-4 rounded-lg text-black">
                <h3 className="text-lg font-semibold mb-2">รายการในตะกร้า:</h3>
                {cart.length === 0 ? (
                    <p>ตะกร้าว่าง</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>{item.price} บาท</span>
                        </div>
                    ))
                )}
                <div className="mt-2 font-bold">
                    <span>จำนวนรายการในตะกร้า: {cart.length}</span>
                </div>
            </div>
        </div>
    );
};

// Component สำหรับหน้าจอง
const BookingPage = () => {
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState(1);
    const [cartCount, setCartCount] = useState(0);
    const maxCapacity = 10;
    const navigate = useNavigate();  // ใช้ useNavigate

    const handleConfirmBooking = () => {
        if (!formData) {
            alert("กรุณากรอกข้อมูลในฟอร์มลงทะเบียนให้ครบถ้วนก่อนยืนยันการจอง");
            return;
        }
    
        console.log('Navigating with:', {
            formData,
            selectedDate,
            total,
            selectedPeople,
            cart, // เพิ่ม cart ที่นี่
        });
    
        navigate('/receipt', {
            state: {
                formData,
                selectedDate,
                total,
                selectedPeople,
                cartItems: cart, // ส่ง cart เป็น cartItems ไปยัง Receipt
            },
        });
    };
    

    const handleUpdate = (price) => {
        setTotal((prevTotal) => Math.max(prevTotal + price, 0));
    };

    const handleFormSubmit = (data) => {
        setFormData(data); // ตรวจสอบว่ามีข้อมูลที่ถูกต้อง
        console.log('ข้อมูลการลงทะเบียน:', data);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlePeopleChange = (e) => {
        setSelectedPeople(parseInt(e.target.value, 10));
    };

    const isCampingAvailable = selectedPeople <= maxCapacity;

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-lime-500 mb-8">จองลานกางเต็นท์</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">จำนวนคนที่กางเต็นท์</h2>
                        <input
                            type="number"
                            min="1"
                            max={maxCapacity}
                            value={selectedPeople}
                            onChange={handlePeopleChange}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
                        />
                        {!isCampingAvailable && (
                            <p className="text-red-500 mt-2">ขออภัย เต็มแล้ว</p>
                        )}
                    </div>

                    <CalendarComponent onDateChange={handleDateChange} />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <RegistrationForm onSubmit={handleFormSubmit} />
                    <RentalItems onUpdate={handleUpdate} cartCount={cartCount} setCartCount={setCartCount} />
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg text-black">
                    <h2 className="text-lg font-semibold">ยอดรวมทั้งหมด:</h2>
                    <p className="text-2xl font-bold">{total} บาท</p>
                    <div className="mt-4 flex items-center justify-between">
                        <button
                            className=" bg-lime-500 hover:bg-lime-700 text-white py-2 px-4 rounded"
                            onClick={handleConfirmBooking}  // เรียกใช้ฟังก์ชันเมื่อกดปุ่ม
                        >
                            ยืนยันการจอง
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
