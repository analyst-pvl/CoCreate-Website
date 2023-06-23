import data from "../../../data/opportunities";
import Close from "@/components/Opportunities/Close";

const DataDivision = (props) => {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <ul className="text-sm md:text-base ml-5 list-disc">
        {props.data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Modal = (props) => {
  const opportunity = data[props.showModal];

  return (
    <div className="fixed top-0 h-screen w-screen backdrop-blur-md z-50 flex items-center justify-center ">
      <div className="md:w-3/4 bg-white md:rounded-xl w-screen md:max-w-[1000px] max-h-[80vh] px-5  animate-fade-in overflow-y-scroll relative overflow-hidden">
        <div className="bg-white sticky top-0 py-5">
          <div className="flex justify-end mb-5">
            <button
              onClick={() => {
                props.setShowModal(-1);
              }}
            >
              <Close />
            </button>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-center md:text-left mb-5">
            {opportunity.title}
          </h1>
          <p className="text-sm md:text-base text-center md:text-left">
            {opportunity.modalDescription}
          </p>
        </div>
        <div className="pr-5">
          <DataDivision
            data={opportunity.jobDescription}
            title="Job Description"
          />
          <DataDivision
            data={opportunity.whoWeAreLookingFor}
            title="Who We Are Looking For"
          />
          <DataDivision
            data={opportunity.ourPreferences}
            title="Our Preferences"
          />
        </div>
        <div className="flex justify-end sticky bottom-0 bg-white py-5">
          <button
            className="text-white bg-[#323232] py-3.5 px-4 rounded-lg min-w-[140px] z-10 hover:bg-[#463AD4]"
            onClick={() => {
              window.open(opportunity.link, "_blank");
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
