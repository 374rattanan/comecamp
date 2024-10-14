import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[url('https://media.istockphoto.com/id/1493141172/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%A5%E0%B8%87%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%B2%E0%B8%9A-sirinyazi-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%95%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B5.jpg?s=1024x1024&w=is&k=20&c=2iosUjh6ZObWpicdQ6DjJfpn4mKV34m93v0j_v0g2x8=')] bg-cover bg-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-bold text-lime-500 mt-4">เกี่ยวกับเรา</h2>
                        <p className="text-white mt-2">
                            อุทยานแห่งชาติเป็นสถานที่ท่องเที่ยวที่สวยงาม พร้อมให้บริการนักท่องเที่ยวที่ต้องการสัมผัสธรรมชาติและการผจญภัย.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0 mt-4">
                        <h2 className="text-lg font-bold text-lime-500">ลิงก์ที่น่าสนใจ</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="/" className="text-white hover:text-lime-200">หน้าแรก</a>
                            </li>
                            <li>
                                <a href="/travel-info" className="text-white hover:text-lime-200">ข้อมูลการเดินทาง</a>
                            </li>
                            <li>
                                <a href="/activities" className="text-white hover:text-lime-200">กิจกรรมและบริการ</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white hover:text-lime-200">ติดต่อเรา</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-lime-500 mt-4">ติดตามเรา</h2>
                        <div className="flex space-x-4 mt-1">
                            <a href="#" aria-label="Facebook" className="text-white hover:text-lime-200">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white hover:text-lime-200">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-white hover:text-lime-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
