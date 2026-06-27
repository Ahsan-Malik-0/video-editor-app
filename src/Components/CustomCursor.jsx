// import { useEffect, useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);
//   const ringRef = useRef(null);

//   // Raw mouse position
//   const mouseX = useMotionValue(-100);
//   const mouseY = useMotionValue(-100);

//   // The ring lags behind — creates a smooth follow effect
//   const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
//   const ringX = useSpring(mouseX, springConfig);
//   const ringY = useSpring(mouseY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };

//     const handleMouseEnterLink = () => {
//       cursorRef.current?.classList.add("cursor-hover");
//       ringRef.current?.classList.add("ring-hover");
//     };

//     const handleMouseLeaveLink = () => {
//       cursorRef.current?.classList.remove("cursor-hover");
//       ringRef.current?.classList.remove("ring-hover");
//     };

//     window.addEventListener("mousemove", moveCursor);

//     // Apply hover effect on all interactive elements
//     const attachHover = () => {
//       const interactives = document.querySelectorAll("a, button, input, textarea, select, [data-cursor-hover]");
//       interactives.forEach((el) => {
//         el.addEventListener("mouseenter", handleMouseEnterLink);
//         el.addEventListener("mouseleave", handleMouseLeaveLink);
//       });
//     };

//     attachHover();

//     // Re-attach on DOM changes (for dynamic content)
//     const observer = new MutationObserver(attachHover);
//     observer.observe(document.body, { childList: true, subtree: true });

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       observer.disconnect();
//     };
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       {/* Small gold dot — snaps instantly */}
//       <motion.div
//         ref={cursorRef}
//         className="cursor-dot"
//         style={{
//           x: mouseX,
//           y: mouseY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />

//       {/* Larger ring — follows with spring lag */}
//       <motion.div
//         ref={ringRef}
//         className="cursor-ring"
//         style={{
//           x: ringX,
//           y: ringY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />
//     </>
//   );
// }
