"use client";

import { Container } from "./Container";
import { PageTitle } from "./PageTitle";
import { IconMessage2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "Laravel",
      icon: "images/skills/laravel.png",
    },
    {
      name: "PHP",
      icon: "images/skills/php.png",
    },
    {
      name: "JavaScript",
      icon: "images/skills/js.png",
    },

    {
      name: "Next.js",
      icon: "images/skills/next-js.png",
    },

    {
      name: "JQuery",
      icon: "images/skills/jquery.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png",
    },
  ];

  return (
    <Container>
      <PageTitle title="Hakkımda" icon={<IconMessage2 size="32" />} />
      <div className="mt-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 my-10">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={skill.name}
              className="rounded-lg bg-secondary text-secondary-foreground shadow-md w-full p-4 flex flex-col items-center justify-between gap-2"
            >
              <div className="flex-1 flex items-center justify-center p-1">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full h-5 text-xs font-mono flex justify-center">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="mb-4">
            Merhaba, ben Mert Müstehlik. Yazılım kariyerime ilk yıllarımda CRM,
            ERP ve kurumsal web projeleri geliştirerek başladım. Bu süreçte rol
            bazlı yetkilendirme, veri akışları, entegrasyonlar ve kurumsal iş
            süreçleri gibi konularda güçlü bir temel edindim. Aynı zamanda
            Laravel Blade ve Vue.js ile arayüz geliştirme deneyimi kazanarak hem
            backend hem de frontend taraflarında aktif rol aldım.
          </p>
          <p className="mb-4">
            Zamanla daha büyük ve kapsamlı projelerde yer alarak RESTful
            API’ler, GraphQL servisleri, yüksek trafikli mimariler ve kullanıcı
            odaklı yönetim panelleri geliştirdim. Laravel, PostgreSQL, MySQL,
            MongoDB, Redis ve çeşitli modern web araçlarıyla çalışıyor; ihtiyaç
            duyulan modülleri analiz aşamasından geliştirme, optimizasyon ve
            dağıtıma kadar uçtan uca tasarlıyorum.
          </p>
          <p className="mb-4">
            Çalışma yaklaşımım; temiz kod, doğru mimari kararlar, tutarlı veri
            modelleri, performans odaklı çözümler ve sürekli öğrenme prensipleri
            üzerine kurulu. Her projede sürdürülebilir, ölçeklenebilir ve
            gerçekten değer üreten yazılımlar geliştirmeyi hedefliyorum.
          </p>
          <p className="mb-4">
            Yazılımda beni en çok motive eden şey, bir fikrin kodla birlikte
            gerçek bir ürüne dönüşmesi. Ortaya çıkan bir uygulamanın insanların
            hayatında karşılık bulduğunu görmek hem beni mutlu ediyor hem de
            sonraki projeler için daha fazla heyecanlandırıyor. Ürettiğim her
            iş, bu tutkuyu daha da güçlendiriyor.
          </p>
        </div>
      </div>
    </Container>
  );
}
