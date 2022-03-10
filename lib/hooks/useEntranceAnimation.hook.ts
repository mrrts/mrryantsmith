import anime, { AnimeInstance } from "animejs";
import { useEffect, useRef } from "react";

export const useEntranceAnimation = (targets: string) => {
  const animationRef = useRef<AnimeInstance>();

  useEffect(() => {
    animationRef.current = anime({
      targets,
      delay: anime.stagger(300),
      duration: 1000,
      opacity: [0, 1],
      translateX: ['-30px', 0]
    })
  }, [targets])
}