export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
   // Add comment to invalidate cache
  const baseStyles = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "600",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#f3ef00",
      color: "white",
    },
    secondary: {
      backgroundColor: "#f5f5f5",
      color: "#333",
      border: "1px solid #e5e7eb",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyles, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}


// export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
//   const baseStyles = {
//     padding: '12px 24px',
//     borderRadius: '8px',
//     fontSize: '16px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.2s ease',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   }
 
//   const variantStyles = {
//     primary: { background: '#d946ef', color: 'white' },
//     secondary: { background: '#f3f4f6', color: '#1f2937', border: '1px solid #e5e7eb' },
//   }
 
//   const hoverStyles = {
//     transform: 'translateY(-1px)',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
//   }
 
//   return (
//     <button
//       style={{ ...baseStyles, ...variantStyles[variant] }}
//       onClick={onClick}
//       onMouseEnter={(e) => {
//         Object.assign(e.currentTarget.style, hoverStyles)
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = 'translateY(0)'
//         e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
//       }}
//     >
//       {children}
//     </button>
//   )
// }