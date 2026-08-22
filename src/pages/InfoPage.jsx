import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function InfoPage({ type }) {
  const data = {
    about: {
      eyebrow: "ABOUT COSMOSPHERE",
      title: "A living archive for human curiosity.",
      lead: "CosmoSphere is an editorial astronomy portal built to make credible space knowledge easier to discover, understand and share.",
      sections: [
        [
          "Our mission",
          "We connect curious readers with clear explanations of planets, missions, celestial objects and the science behind new observations.",
        ],
        [
          "How we work",
          "Every story is structured for readability first, with source-aware language, transparent authorship and room for readers to explore the wider catalog.",
        ],
        [
          "Built for discovery",
          "The platform combines an editorial archive with a searchable celestial catalog so one question can lead naturally to the next discovery.",
        ],
      ],
    },
    editorial: {
      eyebrow: "EDITORIAL POLICY",
      title: "Evidence first. Clarity always.",
      lead: "Our editorial standard is designed around accuracy, context and transparent communication of uncertainty.",
      sections: [
        [
          "Accuracy",
          "Claims should be supported by credible scientific literature, mission documentation or clearly identified primary observations.",
        ],
        [
          "Context",
          "We distinguish established findings from interpretations, hypotheses and future possibilities. Headlines and summaries should not overstate evidence.",
        ],
        [
          "Corrections",
          "When a meaningful error is identified, the article should be updated with a clear correction rather than silently rewritten.",
        ],
      ],
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Talk to the CosmoSphere team.",
      lead: "Questions, corrections, partnership ideas and editorial submissions are welcome.",
      sections: [
        [
          "Editorial desk",
          "For article corrections, source questions or story ideas, use the editorial contact channel below.",
        ],
        [
          "General enquiries",
          "For partnerships, accessibility feedback or product questions, send a message to hello@cosmosphere.example.",
        ],
        [
          "Research submissions",
          "Authors can use the Publish Article page to submit an image, abstract and full article for review.",
        ],
      ],
    },
  }[type];
  return (
    <section className="container page info">
      <div className="eyebrow">{data.eyebrow}</div>
      <h1>{data.title}</h1>
      <p className="lead">{data.lead}</p>
      <div className="infogrid">
        {data.sections.map(([h, p]) => (
          <article className="infocard" key={h}>
            <div className="mono">COSMOSPHERE / {h.toUpperCase()}</div>
            <h2>{h}</h2>
            <p>{p}</p>
            {type === "contact" && h === "Editorial desk" && (
              <a
                className="primary"
                href="mailto:editorial@cosmosphere.example"
              >
                <Mail size={16} />
                Email editorial
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
