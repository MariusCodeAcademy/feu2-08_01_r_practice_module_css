import Container from '../UI/container/Container';
import SectionTitle from '../UI/sectionTitle/SectionTitle';
import Section from './../UI/section/Section';

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
  gainCards: [
    {
      id: 1,
      icon: 'fa-something',
      title: 'some title',
      descr: 'asdasdasda asdasd',
    },
  ],
};

function GainMore(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
        {/* <GainCardList card={sectionData.gainCards} /> */}
      </Container>
    </Section>
  );
}
export default GainMore;
