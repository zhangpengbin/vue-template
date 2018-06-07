// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {  
  const hasKey =  title;
  const translatedTitle = title;

  if (hasKey) {
    return translatedTitle
  }
  return title
}
