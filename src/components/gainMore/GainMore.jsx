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
      </Container>
    </Section>
  );
}
export default GainMore;
