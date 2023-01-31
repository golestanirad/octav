import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useIsSmallScreenSideMenuOpen = () => {
  const [isSmallScreenSideMenuOpen, setIsSmallScreenSideMenuOpen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsSmallScreenSideMenuOpen(false);
  }, [location]);

  return { isSmallScreenSideMenuOpen, setIsSmallScreenSideMenuOpen };
};
