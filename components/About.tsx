"use client";

import { Container } from "./Container";
import { PageTitle } from "./PageTitle";
import { IconMessage2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "Laravel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1154px-Laravel.svg.png",
    },
    {
      name: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
      name: "React",
      icon: "https://images.seeklogo.com/logo-png/25/1/javascript-logo-png_seeklogo-255387.png",
    },

    {
      name: "Next.js",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMklBUVBX0yV0l3hIdTIxP-luLdoRYZAzvbA&s",
    },

    {
      name: "JQuery",
      icon: "https://miro.medium.com/v2/0*eFomJUFua8tuqe8g.png",
    },
  ];

  return (
    <Container>
      <PageTitle title="Hakkımda" icon={<IconMessage2 size="32" />} />
      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-10">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={skill.name}
              className="rounded-lg bg-gray-50 shadow-md w-full p-4 flex items-center justify-center"
            >
              <img src={skill.icon} alt={skill.name} />
            </motion.div>
          ))}
        </div>

        <div>
          <p className="mb-4">
            Merhaba, ben Mert Müstehlik. Yazılım kariyerime ilk yıllarımda CRM,
            ERP ve kurumsal web projeleri geliştirerek başladım. Bu dönemde rol
            bazlı yetkilendirme, veri süreçleri, entegrasyonlar ve kurumsal iş
            akışlarına yönelik temel yazılım prensiplerini edindim. Aynı zamanda
            bu projelerde Laravel Blade ve Vue.js kullanarak arayüz geliştirme
            deneyimi kazanarak hem backend hem frontend tarafında sorumluluk
            aldım.
          </p>
          <p className="mb-4">
            Zaman içinde daha kapsamlı projelerde yer alarak RESTful API’ler,
            GraphQL servisleri, yüksek trafikli mimariler ve kullanıcı odaklı
            yönetim panelleri geliştirdim. Laravel başta olmak üzere PostgreSQL,
            MySQL, MongoDB, Redis, Vue.js ve çeşitli modern web araçlarıyla
            çalışıyor; ihtiyaç duyulan modülleri uçtan uca tasarlayıp
            geliştiriyorum.
          </p>
          <p className="mb-4">
            Çalışma yaklaşımım; temiz kod, doğru mimari, tutarlı veri yapıları,
            performans odaklılık ve sürekli gelişim prensiplerine dayanıyor.
            Amacım her projede kullanıcıya gerçek değer katan, sürdürülebilir ve
            ölçekte çalışabilen yazılımlar üretmek.
          </p>
        </div>
      </div>
    </Container>
  );
}
