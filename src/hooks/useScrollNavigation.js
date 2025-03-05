import { useEffect } from 'react';

function useScrollNavigation() {
  useEffect(() => {
    const handleArrowClick = (e) => {
      const section = e.target.closest('section');
      if (section) {
        const nextSection = section.nextElementSibling;
        if (window.innerWidth < 576 || window.innerHeight < 600) {
          while (nextSection && nextSection.offsetHeight === 0) {
            nextSection = nextSection.nextElementSibling;
          }
          if (!nextSection) return;
        }
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll(".arrow-down").forEach(arrow => {
      arrow.addEventListener("click", handleArrowClick);
    });

    // Cleanup
    return () => {
      document.querySelectorAll(".arrow-down").forEach(arrow => {
        arrow.removeEventListener("click", handleArrowClick);
      });
    };
  }, []);
}

export default useScrollNavigation; 