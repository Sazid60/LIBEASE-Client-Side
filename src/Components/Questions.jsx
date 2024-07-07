import { useState } from "react";


const Questions = () => {
    const [openQuestion, setOpenQuestion] = useState(null);
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };
    const faqData = [
        {
            question: 'How can I register an account?',
            answer: 'To register, click on the "Register" button on the homepage, fill in your details, and submit the form. You will receive a confirmation email to complete your registration.'
        },
        {
            question: 'How can I borrow a book?',
            answer: 'Log in to your account, browse the available books, and click on the "Borrow" button next to the book you want. You can pick up the book at the circulation desk.'
        },
        {
            question: 'What are the library\'s operating hours?',
            answer: 'Our library is open from 9 AM to 8 PM on weekdays, and from 10 AM to 6 PM on weekends.'
        },
        {
            question: 'Can I reserve a book that is currently checked out?',
            answer: 'Yes, you can reserve a book that is currently checked out. Log in to your account, find the book, and click "Reserve." You\'ll be notified when it becomes available.'
        },
        {
            question: 'How do I pay for overdue fines?',
            answer: 'Overdue fines can be paid online through your library account using a credit card or at the circulation desk with cash or card.'
        },
        {
            question: 'What privileges do admins have?',
            answer: 'Admins can add, update, and delete books from the library system. However, they cannot borrow books.'
        }
    ];
    return (
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Frequently Asked Questions</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-4 font-sedan" >FAQs are a list of commonly asked questions and answers designed to provide quick and accessible information to users.</p>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                <div className="font-sedan w-full md:w-[55%] lg:w-[80%] xl:w-[60%]">
                    <div className="space-y-3 ">
                        {faqData.map((item, index) => (
                            <div key={index} className="p-2 md:p-2 lg:p-4 rounded-lg border">
                                <button
                                    className="flex items-center justify-between text-left w-full text-xs md:text-lg lg:text-lg"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <h1 className="font-semibold ">{item.question}</h1>
                                    <span className="  rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 transform transition-transform ${openQuestion === index ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                                {openQuestion === index && (
                                    <p className="mt-3 lg:mt-3 text-sm ">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" h-[70%] w-[70%]  xl:w-[30%] xl:h-full ">
                    <img src="/faq.png" className="" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Questions;