import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // You can use any icon

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked panel
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

        <div className="faq-item mb-4">
          <div
            className="faq-question p-4 bg-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-xl font-semibold">What is the best time to trek in Nepal?</h3>
            <span>
              {activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer p-4 mt-2 bg-gray-100 rounded-lg">
              <p>The best time for trekking in Nepal is during the spring (March to May) and autumn (September to November). These months offer clear skies and mild temperatures.</p>
            </div>
          )}
        </div>

        <div className="faq-item mb-4">
          <div
            className="faq-question p-4 bg-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-xl font-semibold">Do I need previous trekking experience?</h3>
            <span>
              {activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer p-4 mt-2 bg-gray-100 rounded-lg">
              <p>No prior trekking experience is required for most treks in Nepal, but a basic level of fitness and stamina is recommended for a more enjoyable journey.</p>
            </div>
          )}
        </div>

        <div className="faq-item mb-4">
          <div
            className="faq-question p-4 bg-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-xl font-semibold">What kind of gear do I need for trekking?</h3>
            <span>
              {activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer p-4 mt-2 bg-gray-100 rounded-lg">
              <p>You'll need appropriate clothing, trekking boots, a sleeping bag, a backpack, and essential accessories like trekking poles, a water bottle, and a first-aid kit. We provide a detailed list of recommended gear for each trek.</p>
            </div>
          )}
        </div>

        <div className="faq-item mb-4">
          <div
            className="faq-question p-4 bg-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleAnswer(3)}
          >
            <h3 className="text-xl font-semibold">Are the treks guided or self-guided?</h3>
            <span>
              {activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer p-4 mt-2 bg-gray-100 rounded-lg">
              <p>All our treks are guided. Our experienced guides ensure your safety and enhance your trekking experience by sharing their knowledge of the local culture, wildlife, and landscapes.</p>
            </div>
          )}
        </div>

        <div className="faq-item mb-4">
          <div
            className="faq-question p-4 bg-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => toggleAnswer(4)}
          >
            <h3 className="text-xl font-semibold">What should I do if I have more questions?</h3>
            <span>
              {activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {activeIndex === 4 && (
            <div className="faq-answer p-4 mt-2 bg-gray-100 rounded-lg">
              <p>If you have more questions, feel free to contact us through our contact form or email us directly. We are happy to assist you in planning your trekking adventure!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
