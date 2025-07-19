
import { useEffect, useRef } from "react";

export default function Modal({ setIsOpen, isOpen,
}) {
 
  const modalRef = useRef(null);



  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for mousedown
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]); // Add setIsOpen as a dependency






  if (!isOpen) return null;
  return (
   
    <div ref={modalRef} id="profile-modal" className='absolute right-0 mt-5 mx-8 bg-white shadow-lg rounded-lg overflow-hidden z-50'>
      <div className=" p-4 cursor-pointer">
          <p>Are you sure you want to <br /> log out?</p>
        <div className="flex items-center  justify-center gap-3 py-2">
          <button class="px-6 py-2  bg-[#4e8a05] rounded-lg text-white">Yes</button>
          <button class="px-6 py-2 rounded-lg border border-[#4e8a05] text-[#4e8a05]  hover:bg-[#4e8a05] hover:text-white">No</button>

        </div>
      </div>
    </div>
  );
}
