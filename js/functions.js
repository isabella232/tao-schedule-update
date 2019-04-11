jQuery(document).ready(function() {
  jQuery('span.copy_to_publish>a').click(function(e) {
    jQuery(this).replaceWith('<b>Scheduling...</b>');
  });
});
