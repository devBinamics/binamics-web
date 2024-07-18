import { useNavigate } from "react-router-dom";

export const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = (path, hash) => {
    navigate(path, { replace: true });

    // Wait for the navigation to complete
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 0);
  };

  return navigateAndScroll;
};
