document.addEventListener('DOMContentLoaded', () => {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const galleryImages = document.querySelectorAll('#gallery img');
  
    filterCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selectedTags = Array.from(filterCheckboxes)
          .filter(checkbox => checkbox.checked)
          .map(checkbox => checkbox.value);
  
        galleryImages.forEach(image => {
          const imageTag = image.dataset.tag;
          if (selectedTags.length === 0 || selectedTags.includes(imageTag)) {
            image.classList.add('hidden');
          } else {
            image.classList.remove('hidden');
          }
        });
      });
    });
  });