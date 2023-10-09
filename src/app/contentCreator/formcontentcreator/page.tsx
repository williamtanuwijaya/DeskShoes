import ContactForm from '@/components/contentCreator/ContactForm';
import PageContentCreator from '@/components/contentCreator/pageContentCreator';
import React from 'react';

export default function page() {
  return (
    <>
      <ContactForm />
      <PageContentCreator />
    </>
  );
}
