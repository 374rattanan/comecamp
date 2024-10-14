import { useLocation } from 'react-router-dom';

const Receipt = () => {
    const location = useLocation();
    const { formData, selectedDate, total, selectedPeople, cartItems } = location.state || {};

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-lime-500 mb-8">ใบเสร็จการจอง</h1>
                {formData && (
                    <>
                        <p><strong>ชื่อ:</strong> {formData.firstName} {formData.lastName}</p>
                        <p><strong>อีเมล:</strong> {formData.email}</p>
                        <p><strong>เบอร์โทร:</strong> {formData.phoneNumber}</p>
                        <p><strong>วันจอง:</strong> {selectedDate ? selectedDate.toLocaleDateString() : 'ยังไม่เลือกวัน'}</p>
                        <p><strong>จำนวนคน:</strong> {selectedPeople}</p>

                        {/* ส่วนที่แสดงรายการที่จอง */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-4">รายการที่จอง:</h2>
                            {cartItems && cartItems.length > 0 ? (
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}</strong> - {item.price} บาท
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>ไม่มีรายการสินค้าในตะกร้า</p>
                            )}
                        </div>

                        {/* ยอดรวม */}
                        <p className="mt-4"><strong>ยอดรวม:</strong> {total} บาท</p>
                    </>
                )}
            </div>
        </div>
    );
};


export default Receipt;
