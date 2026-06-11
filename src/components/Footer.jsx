const links = {
  Shop: ["All Products", "mechanical", "custom", "silent", "tactile"],
  Support: ["Contact Us", "FAQ", "Shipping Info", "Returns", "Warranty"],
  Company: ["About Us", "Careers", "Press Kit", "Terms", "Privacy"],
};

function FooterLinks({ name, linkNames }) {
  return (
    <div>
      <p className="text-white pb-3">{name}</p>
      <div className="flex flex-col gap-1.5 text-gray-500">
        {linkNames.map((link) => {
          return <p key={name}>{link}</p>;
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#181818] text-white flex justify-around px-10 py-25">
      <div className="">
        <p className="flex-1 text-[1.3rem] font-extrabold tracking-tight">CLAVIER</p>
        <p className="pt-5 text-gray-500">
          Crafting premium mechanical keyboards for enthusiasts<br /> worldwide since 2020
        </p>
      </div>
      {Object.entries(links).map(([key, value]) => (
        <FooterLinks key={key} name={key} linkNames={value} />
      ))}
    </div>
  );
}

export default Footer;
