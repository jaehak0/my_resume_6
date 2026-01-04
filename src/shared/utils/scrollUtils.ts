/**
 * Scroll to an element by ID with smooth behavior
 * @param id - Element ID to scroll to
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
