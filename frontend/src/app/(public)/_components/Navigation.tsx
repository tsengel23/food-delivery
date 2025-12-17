// export const Navigation = () => {
//   const hasUser = false;
//   return (
//     <div className="flex justify-between">
//       <p>logo</p>
//       <div>{hasUser ? <div> cart</div> : <div>login</div>}</div>
//     </div>
//   );
// };

export const Navigation = () => {
  const hasUser = true;
  return (
    <div className="flex justify-between">
      <p>logo</p>
      <div>{hasUser ? <div> cart</div> : <div>login</div>}</div>
    </div>
  );
};
