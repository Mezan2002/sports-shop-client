import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";

const AboutUs = () => {
  return (
    <section>
      <NavigationHeader />
      <div className="mt-5 w-1/2">
        <h3 className="text-3xl font-semibold text-gray mb-5">About us</h3>
        <p className="font-medium text-gray-500">
          Champso is a leading retailer specializing in high-quality sporting
          goods for athletes and outdoor enthusiasts. We provide a wide range of
          products, from fitness equipment to sportswear, ensuring that our
          customers always have access to the best gear for their needs. Whether
          you&apos;re training for a marathon, starting a new fitness journey,
          or just looking for equipment to enjoy your favorite sport, we&apos;ve
          got you covered. With a passion for excellence and customer
          satisfaction, we aim to provide superior products that enhance the
          sports experience. Our eCommerce platform allows us to serve customers
          worldwide, delivering sporting goods to your doorstep with just a few
          clicks.
        </p>
      </div>
      <div className="flex justify-end">
        <div className="mt-5 w-1/2">
          <h3 className="text-3xl font-semibold text-gray mb-5">Our mission</h3>
          <p className="font-medium text-gray-500">
            Our mission is to inspire and empower athletes, fitness enthusiasts,
            and sports lovers of all levels by offering top-notch sporting goods
            that enhance their performance and passion. We are dedicated to
            providing quality products, exceptional customer service, and a
            seamless online shopping experience, fostering a love for fitness
            and outdoor activities across the globe.
          </p>
        </div>
      </div>
      <div className="mt-5 w-1/2">
        <h3 className="text-3xl font-semibold text-gray mb-5">Our vision</h3>
        <p className="font-medium text-gray-500">
          We envision becoming the go-to destination for sporting goods
          worldwide, recognized for our commitment to quality, innovation, and
          customer satisfaction. Our goal is to support the global sports
          community by continuously expanding our product offerings and
          maintaining an environment where every customer feels empowered to
          reach their fitness and sporting potential.
        </p>
      </div>

      <div className="my-10">
        <h3 className="text-3xl font-semibold text-gray mb-10 text-center">
          Meet our team
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((user) => (
            <a
              href="#"
              className="group relative block bg-black h-96 object-cover"
            >
              <img
                alt=""
                src=""
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  Founder & CEO
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  Mezanur Rahman
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div>
          <h3 className="text-3xl font-semibold text-gray mb-5">
            Our location
          </h3>
          <p className="font-medium text-gray-500">
            Our headquarters and flagship store are located in Dhaka,
            Bangladesh. If you're in the area, feel free to visit us and explore
            our wide selection of sporting goods in person.
          </p>
          <p className="font-medium text-gray-500 pt-5">
            Address: Mirpur 13, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-gray mb-5">Contacts us</h3>
          <p className="font-medium text-gray-500">
            Email: champso@shop.com <br />
            Phone: +8801234567891 <br />
            Office Hours: Monday – Friday, 9 AM – 5 PM
          </p>
          <p className="font-medium text-gray-500 pt-5">
            For any inquiries or support, feel free to reach out via email or
            phone, and our team will be happy to assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
