import { useState } from 'react';

const faqs = [
  {
    question: '¿Es legal el tratamiento con cannabis medicinal?',
    answer:
      'Sí. Está regulado por la Ley 27.350 y su reglamentación. Con la indicación de un profesional matriculado y el REPROCANN aprobado, el acceso al tratamiento y al cultivo es legal en todo el país.'
  },
  {
    question: '¿Necesito derivación de otro médico?',
    answer:
      'No hace falta derivación. Se puede coordinar la primera consulta directamente por WhatsApp. Si ya hay estudios o indicaciones previas, conviene llevarlos.'
  },
  {
    question: '¿Qué documentación tengo que llevar?',
    answer:
      'DNI, estudios o informes médicos relacionados con el motivo de consulta y, si hay, el resumen de tratamientos previos. Para la carga del registro hace falta además tener clave para acceder a la plataforma oficial de salud.'
  },
  {
    question: '¿Cuánto tarda la aprobación del REPROCANN?',
    answer:
      'Los plazos los define el organismo oficial y pueden variar. Desde el centro se hace el seguimiento del trámite y se avisa cuando queda aprobado.'
  },
  {
    question: '¿Puedo cultivar para mi propio tratamiento?',
    answer:
      'El registro aprobado habilita el cultivo con fines medicinales dentro de las condiciones que fija la normativa. En la consulta se explica el alcance y las obligaciones que implica.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="preguntas-frecuentes" className="bg-crema py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          <div className="md:sticky md:top-32 md:w-1/3 md:self-start">
            <p className="label-section">Preguntas frecuentes</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-verde sm:text-5xl">
              Las dudas con las que llega casi todo el mundo
            </h2>
          </div>

          <div className="md:w-2/3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className={`border-salvia/40 ${index !== 0 ? 'border-t' : ''}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-verde md:text-xl">{faq.question}</span>
                    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="absolute h-px w-4 bg-ocre" />
                      <span
                        className="absolute h-4 w-px bg-ocre transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                      />
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 font-body text-tinta/70">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
