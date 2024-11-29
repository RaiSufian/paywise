import img1 from "../../assets/faqs.jpg";
const PaywizeQuest = () => {
    return (
        <section className="container mx-auto px-3 md:px-6 pb-10">
            <div className="flex flex-wrap items-center">
                <div className=" w-full lg:w-1/2 md:pr-12 lg:pr-20 ">
                    <h4 className="text-3xl md:text-5xl font-bold">Are you questioning whether paywize Umbrella is the right fit for you?</h4>
                    <p className="py-2 leading-loose text-stone-500">
                        It’s common for agencies to have a Preferred Supplier List (PSL) that lists their preferred umbrella companies. However, you should have the freedom to choose any umbrella company that suits your needs. While some agency contracts may state that you must use an umbrella company from their PSL, many agencies allow contractors to choose their own. If you’re unsure, it’s always worth asking.
                        At paywize Umbrella, we make joining us a breeze. Once you decide to work with us, we’ll reach out to your agency to introduce ourselves (if we haven’t already). From there, we’ll guide you through the process and provide you with all the support and assistance you need.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="lg:m-10">
                        <img src={img1} className=" w-full h-60 lg:h-full rounded object-cover" />
                    </div>
                </div>
            </div>
        </section>

    )
}
export default PaywizeQuest;