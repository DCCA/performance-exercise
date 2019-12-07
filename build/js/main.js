!function(t){"use strict";function a(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}t((function(){var e,d="",r="https://api.nasa.gov/neo/rest/v1/feed?start_date="+moment().format("YYYY-MM-DD")+"&end_date="+moment().add(6,"days").format("YYYY-MM-DD")+"&api_key=FZyUIK92Ad3nAQQowqtLqyHROaJVaEIoJlIqklhj",o=t(".ajax-loader");t(".neos-list");t.ajax({url:r,method:"get"}).done((function(r){e=r.near_earth_objects,Object.keys(e).sort().forEach((function(r,o){var i=e[r],s=moment(r).format("dddd, MMMM DD, YYYY");d+="<h3>"+s+"</h3>",d+="<table>",d+="<thead>",d+="<tr>",d+="<th>Name</th>",d+="<th>Est. Max. Diameter</th>",d+="<th>Miss Distance</th>",d+="<th>Relative Velocity</th>",d+="<th>Hazardous?</th>",d+="</tr>",d+="</thead>",d+="<tbody>",t.each(i,(function(t,e){var r=e.is_potentially_hazardous_asteroid?"Call Bruce Willis":"Not this time";d+="<tr>",d+='<td data-header="Name"><a href="'+e.nasa_jpl_url+'">'+e.name+"</a></td>",d+='<td data-header="Est. Max. Diameter">'+a(e.estimated_diameter.meters.estimated_diameter_max)+" m</td>",d+='<td data-header="Miss Distance">'+a(e.close_approach_data[0].miss_distance.kilometers)+" km</td>",d+='<td data-header="Relative Velocity">'+a(e.close_approach_data[0].relative_velocity.kilometers_per_hour)+" km/h</td>",d+='<td data-header="Hazardous?">'+r+"</td>",d+="</tr>"})),d+="</tbody>",d+="</table>"})),t(".neos-list").append(d)})).fail((function(){})).always((function(){o.hide()}))}))}(jQuery);