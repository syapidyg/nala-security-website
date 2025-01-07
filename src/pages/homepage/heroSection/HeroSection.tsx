import Button from "../../../components/button/Button";
import "./HeroSection.css";
import Cadenas from "../../../assets/logo/cadenas.png";

// function HeroSection() {
//   return (
//     <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
//       <Carousel className=" w-full mx-auto ">
//         <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
//           <div>
//             <img src={Cadenas} alt="" />
//           </div>

//           {/* texte */}
// <div className="md:w-1/2">
//   <h1 className="text-6xl font-primaryBold mb-4 md:3/4">
//     Protégez vos données, préservez votre avenir.
//   </h1>
//   <p className="font-primaryRegular text-base tracking-tight max-w-[500px] mb-8 ">
//     Nala Consulting Security : votre bouclier numérique pour protéger
//     entreprises et particuliers face aux cybermenaces croissantes du
//     monde. Avec une équipe d'experts en sécurité hautement qualifiés,
//     nous proposons des solutions et services de pointe, conçus pour
//     répondre aux besoins actuels en cybersécurité.
//   </p>
//   <Button children={"Nos services"} />
// </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// }

function HeroSection() {
  return (
    <div className="px-4 pt-2 pb-6 lg:px-14  mx-auto ">
      <div className="md:flex place-items-start justify-between flex-row-reverse sm:flex place-items-center   sm:text-center md:text-start">
        <img src={Cadenas} alt="cadenas" className="md:block w-4/12" />
        <div className="md:w-1/2">
          <h1 className="text-6xl font-primaryBold mb-4 md:3/4">
            Protégez vos données, préservez votre avenir.
          </h1>
          <p className="font-primaryRegular text-base tracking-tight max-w-[500px] mb-8 ">
            Nala Consulting Security : votre bouclier numérique pour protéger
            entreprises et particuliers face aux cybermenaces croissantes du
            monde. Avec une équipe d'experts en sécurité hautement qualifiés,
            nous proposons des solutions et services de pointe, conçus pour
            répondre aux besoins actuels en cybersécurité.
          </p>
          <Button to="/services" children={"Nos services"} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// <div className="flex flex-col items-center py-10 ">
//           <div className="text-center text-4xl md:text-5xl font-primaryBold  tracking-tight lg:text-6xl ">
//             <h2>Protégez vos données,</h2>
//             <h2>Préserver votre avenir.</h2>
//           </div>
//           <div className="text-center font-primaryRegular  py-4 tracking-tight max-w-[500px] lg:text-start ">
//             Nala Consulting Security : votre bouclier numérique pour protéger
//             entreprises et particuliers face aux cybermenaces croissantes du
//             monde. Avec une équipe d'experts en sécurité hautement qualifiés,
//             nous proposons des solutions et services de pointe, conçus pour
//             répondre aux besoins actuels en cybersécurité.
//           </div>
//           <Button children={"Nos services"} />

//         </div>

{
  /* <div className="servicepresentation flex place-items-center">
            <BookOpenIcon className="size-4 text-primary" />
            Nos offres et services!
          </div> */
}
