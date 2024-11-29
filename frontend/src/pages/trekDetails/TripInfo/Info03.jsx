import { useState } from "react";

const FAQ = () => {
  // Helper function to toggle FAQ items
  const FAQItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left text-sm font-semibold py-4 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <span>{isOpen ? "-" : "+"}</span>
        </button>
        {isOpen && <div className="text-sm text-gray-700 pb-4 ">{children}</div>}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        <FAQItem title="General">
          <p>Get answers to general questions about the Everest Base Camp trek, including details about duration, difficulty, and recommended fitness levels.</p>
        </FAQItem>

        <FAQItem title="Weather and Temperature">
          <p>Learn about the best times to trek, weather patterns in the Everest region, and typical temperatures to expect throughout the year.</p>
        </FAQItem>

        <FAQItem title="Arrival and Visa">
          <p>Find information on visa requirements, arrival procedures at Kathmandu airport, and the process for obtaining trekking permits.</p>
        </FAQItem>

        <FAQItem title="Payment and Extra Costs">
          <p>Understand payment options, deposit policies, and any extra costs that may arise during the trek (e.g., tips, personal expenses, additional meals).</p>
        </FAQItem>

        <FAQItem title="Who Can Trek">
          <p>Discover the physical requirements and ideal health conditions for trekking to Everest Base Camp, and who this trek is suitable for.</p>
        </FAQItem>

        <FAQItem title="Trek Preparation and Packing">
          <p>Get advice on preparing for the trek, including recommended packing lists, gear requirements, and tips for acclimatizing effectively.</p>
        </FAQItem>

        <FAQItem title="Everest Base Camp Heli Trek Accommodation">
          <p>Learn about accommodation options available on the trek, including tea houses, lodges, and Heli trek packages for those short on time.</p>
        </FAQItem>

        <FAQItem title="Health and Safety">
          <p>Read about the health and safety protocols followed on the trek, including altitude sickness prevention, emergency evacuation, and hygiene tips.</p>
        </FAQItem>

        <FAQItem className="text-sm" title="Practical Matters">
          <p className="text-sm">Get insights into practical considerations, such as currency, SIM cards, internet availability, and charging options during the trek.</p>
        </FAQItem>
      </div>
    </div>
  );
};

export default FAQ;
