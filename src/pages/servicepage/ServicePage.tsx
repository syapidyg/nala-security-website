import Ellipse from "../../components/ellipse/Ellipse";
import Footer from "../../components/layouts/footer/Footer";
import Navbar from "../../components/layouts/navbar/Navbar";
import ServiceItem from "../../components/serviceItem/ServiceItem";
import ServiceItem2 from "../../components/serviceItem/ServiceItem2";
// import EndPointImg from "../../assets/icons/endpoint-security.png";
// import CloudSecurityImg from "../../assets/icons/cloud-security.png";
// import DataLostImg from "../../assets/icons/data-loss-prev.png";
// import EyeFuturImg from "../../assets/icons/eye-futuristic-robot.jpg";
// import CyberHand from "../../assets/icons/cyber-hand.jpg";
// import Footer from "../../components/layouts/footer/Footer";
import EndPointImg from "../../assets/photos/endpoint-security.png";
import CloudSecurityImg from "../../assets/photos/cloud-security.png";
import DataLostImg from "../../assets/photos/data-loss-prev.png";
import EyeFuturImg from "../../assets/photos/eye-futuristic-robot.jpg";
import CyberHand from "../../assets/photos/cyber-hand.jpg";



function ServicePage() {
  return (
    <div>
      <Ellipse />
      <Navbar />
      <div className="place-items-center">
        <div className=" flex flex-col items-center text-center   ">
          <h1 className="text-2xl font-primaryBold text-primary  mb-6 mt-5">
            NOS SERVICES
          </h1>
        </div>
      </div>
      <ServiceItem2
        title="Formation de Sensibilisation à la Sécurité Kaspersky"
        description="Nala Security Consulting, partenaire certifié Platinum de Kaspersky au Cameroun, propose la solution KASAP (Kaspersky Security Awareness Program), déclinée en trois formules : sensibilisation des administrateurs IT, sensibilisation globale des employés, et programmes sur mesure pour entreprises et organismes gouvernementaux. Notre approche repose sur l’identification des besoins spécifiques du client, suivie de formations personnalisées comprenant des modules interactifs (vidéos, quiz, jeux éducatifs) adaptés au rythme de chaque participant. Des suivis réguliers permettent d'évaluer l’évolution des connaissances et de renforcer durablement la culture cybersécurité au sein des organisations."
        image={EndPointImg}
      />
      <ServiceItem
        title="Sécurité du Cloud
"
        description="Nala Security Consulting, en partenariat avec Skyhigh Security et Rapid7, propose la solution Cloud Security pour renforcer la protection des données en entreprise. Cette solution assure le chiffrement des données sensibles, limitant ainsi les risques de vols ou d'accès non autorisés. Un système d'authentification avancé contrôle les autorisations des utilisateurs afin de restreindre l'accès aux informations critiques. En complément, des procédures de récupération de données sont mises en place pour prévenir les pertes, et la surveillance des activités est assurée grâce à l'analyse des modèles de trafic et l'utilisation de systèmes de détection d'intrusion."
        image={CloudSecurityImg}
      />
      <ServiceItem2
        title="Prévention des Pertes de Données"
        description="NSC en collaboration avec les sociétés de cybersécurité THALES,TRELLIX et HELPSYSTEMS. nous identifions tout d'abord l'ensemble de vos données sensibles confidentielles, puis nous identifierons les vulnérabilité ainsi qu'une évaluation concise de l'impact d'une potentiel perte de données, ensuite nous mettrons sur pied des mesures de sécurité optimale passant par des politiques de classification des données, de gestion d'accès , de surveillance et utilisation des données ainsi qu'une veille continu de surveillance accrue des activités liés à la sécurité des données."
        image={DataLostImg}
      />
      <ServiceItem
        title="Sécurité des Terminaux

"
        description="Nos spécialistes débutent par un inventaire des appareils utilisés par vos employés, sous-traitants et visiteurs, en collectant des données telles que les adresses IP, MAC et systèmes d'exploitation. Ensuite, ils mettent en place des procédures de sécurité incluant la gestion des correctifs, les politiques d’autorisation et la gestion des appareils mobiles. Enfin, la sécurité des points d’extrémité est renforcée par l’installation de logiciels adaptés sur les appareils, garantissant une protection optimale."
        image={EyeFuturImg}
      />
      <ServiceItem2
        title="Cyber Resilience
"
        description="Nos experts réalisent une identification des vulnérabilités, une analyse des menaces et une évaluation des risques d'attaques. Ils mettent ensuite en place des mesures de protection pour résister aux attaques, réduire les impacts et garantir la continuité des activités grâce à des sauvegardes, des plans de reprise après sinistre et des politiques de gestion des incidents."
        image={CyberHand}
      />
      <ServiceItem
        title="Sécurité des Donneés

"
        description="Nala Security Consulting, en partenariat avec Mimecast et Trellix, propose la solution Sécurité des Emails pour protéger les communications professionnelles contre les cybermenaces. Nos outils avancés analysent les emails afin de détecter et mettre en quarantaine les contenus malveillants, liens URL suspects ou pièces jointes dangereuses. Nous renforçons l'authentification des emails grâce aux protocoles SPF, DKIM et DMARC, garantissant la vérification des identités expéditrices. Pour sécuriser les informations sensibles, nous utilisons des technologies de chiffrement telles que PGP et S/MIME, assurant la confidentialité des échanges."
        image={EndPointImg}
      />
      <Footer />
    </div>
  );
}

export default ServicePage;
