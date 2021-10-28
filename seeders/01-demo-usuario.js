'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    
      await queryInterface.bulkInsert('usuarios',[{"id":1,"name":"Queenie","lastName":"Upston","email":"qupston0@opera.com","createdAt":"10.10.2021","updatedAt":"24.10.2021"},
      {"id":2,"name":"Diego","lastName":"Quenby","email":"dquenby1@slashdot.org","createdAt":"16.6.2021","updatedAt":"11.3.2021"},
      {"id":3,"name":"Georgetta","lastName":"Dawkes","email":"gdawkes2@goodreads.com","createdAt":"13.3.2021","updatedAt":"4.12.2020"},
      {"id":4,"name":"Berget","lastName":"Elcome","email":"belcome3@adobe.com","createdAt":"19.7.2021","updatedAt":"12.1.2021"},
      {"id":5,"name":"Samson","lastName":"Shelvey","email":"sshelvey4@arizona.edu","createdAt":"13.2.2021","updatedAt":"17.11.2020"},
      {"id":6,"name":"Dru","lastName":"MacKeever","email":"dmackeever5@samsung.com","createdAt":"3.6.2021","updatedAt":"5.3.2021"},
      {"id":7,"name":"Arv","lastName":"Friel","email":"afriel6@ed.gov","createdAt":"8.12.2020","updatedAt":"22.3.2021"},
      {"id":8,"name":"Mark","lastName":"Verny","email":"mverny7@blogger.com","createdAt":"10.1.2021","updatedAt":"14.12.2020"},
      {"id":9,"name":"Meredith","lastName":"Jagielski","email":"mjagielski8@blogs.com","createdAt":"29.9.2021","updatedAt":"20.9.2021"},
      {"id":10,"name":"Krispin","lastName":"Danell","email":"kdanell9@xrea.com","createdAt":"6.6.2021","updatedAt":"14.8.2021"},
      {"id":11,"name":"Brigham","lastName":"Gatch","email":"bgatcha@huffingtonpost.com","createdAt":"21.10.2021","updatedAt":"3.2.2021"},
      {"id":12,"name":"Esdras","lastName":"Kuhne","email":"ekuhneb@blogger.com","createdAt":"18.11.2020","updatedAt":"5.1.2021"},
      {"id":13,"name":"Ramsey","lastName":"Perett","email":"rperettc@prweb.com","createdAt":"11.3.2021","updatedAt":"7.11.2020"},
      {"id":14,"name":"Alphard","lastName":"Leake","email":"aleaked@wunderground.com","createdAt":"24.10.2021","updatedAt":"13.4.2021"},
      {"id":15,"name":"Vladamir","lastName":"Marquot","email":"vmarquote@linkedin.com","createdAt":"15.4.2021","updatedAt":"26.11.2020"},
      {"id":16,"name":"Emlen","lastName":"Haskew","email":"ehaskewf@oaic.gov.au","createdAt":"6.10.2021","updatedAt":"19.11.2020"},
      {"id":17,"name":"Emelda","lastName":"Arr","email":"earrg@mysql.com","createdAt":"25.1.2021","updatedAt":"12.6.2021"},
      {"id":18,"name":"Yuri","lastName":"Coope","email":"ycoopeh@i2i.jp","createdAt":"17.4.2021","updatedAt":"23.3.2021"},
      {"id":19,"name":"Percy","lastName":"Baugh","email":"pbaughi@icio.us","createdAt":"19.8.2021","updatedAt":"2.10.2021"},
      {"id":20,"name":"Shae","lastName":"Oglevie","email":"sogleviej@bluehost.com","createdAt":"10.12.2020","updatedAt":"26.9.2021"},
      {"id":21,"name":"Sherline","lastName":"Tomovic","email":"stomovick@spotify.com","createdAt":"23.6.2021","updatedAt":"7.10.2021"},
      {"id":22,"name":"Doloritas","lastName":"Bawcock","email":"dbawcockl@i2i.jp","createdAt":"9.10.2021","updatedAt":"16.10.2021"},
      {"id":23,"name":"Bobbye","lastName":"Kenrat","email":"bkenratm@4shared.com","createdAt":"12.1.2021","updatedAt":"27.5.2021"},
      {"id":24,"name":"Sterling","lastName":"Shimman","email":"sshimmann@mashable.com","createdAt":"16.3.2021","updatedAt":"7.7.2021"},
      {"id":25,"name":"Harriott","lastName":"Studeart","email":"hstudearto@chicagotribune.com","createdAt":"6.8.2021","updatedAt":"8.4.2021"},
      {"id":26,"name":"Bernetta","lastName":"Boscher","email":"bboscherp@uol.com.br","createdAt":"22.2.2021","updatedAt":"23.6.2021"},
      {"id":27,"name":"Mavra","lastName":"Harlett","email":"mharlettq@a8.net","createdAt":"19.5.2021","updatedAt":"6.6.2021"},
      {"id":28,"name":"Karlis","lastName":"Fishbie","email":"kfishbier@google.com.au","createdAt":"5.6.2021","updatedAt":"27.7.2021"},
      {"id":29,"name":"Catharine","lastName":"Woodwing","email":"cwoodwings@bbc.co.uk","createdAt":"1.8.2021","updatedAt":"28.4.2021"},
      {"id":30,"name":"Alameda","lastName":"Maron","email":"amaront@wufoo.com","createdAt":"22.4.2021","updatedAt":"17.1.2021"},
      {"id":31,"name":"Vladimir","lastName":"Ceillier","email":"vceillieru@issuu.com","createdAt":"15.3.2021","updatedAt":"3.7.2021"},
      {"id":32,"name":"Kennie","lastName":"Shottin","email":"kshottinv@usatoday.com","createdAt":"19.6.2021","updatedAt":"16.3.2021"},
      {"id":33,"name":"Sula","lastName":"Bruineman","email":"sbruinemanw@hexun.com","createdAt":"11.7.2021","updatedAt":"4.11.2020"},
      {"id":34,"name":"Ivory","lastName":"Feirn","email":"ifeirnx@miitbeian.gov.cn","createdAt":"6.1.2021","updatedAt":"22.10.2021"},
      {"id":35,"name":"Clive","lastName":"Ballantyne","email":"cballantyney@ehow.com","createdAt":"1.10.2021","updatedAt":"18.8.2021"},
      {"id":36,"name":"Gardener","lastName":"Trotton","email":"gtrottonz@prlog.org","createdAt":"4.3.2021","updatedAt":"31.3.2021"},
      {"id":37,"name":"Denny","lastName":"Kingcott","email":"dkingcott10@t.co","createdAt":"26.6.2021","updatedAt":"21.11.2020"},
      {"id":38,"name":"Loy","lastName":"Mouth","email":"lmouth11@smugmug.com","createdAt":"24.8.2021","updatedAt":"28.9.2021"},
      {"id":39,"name":"Adria","lastName":"Bellringer","email":"abellringer12@nymag.com","createdAt":"18.3.2021","updatedAt":"20.6.2021"},
      {"id":40,"name":"Eydie","lastName":"Nilges","email":"enilges13@ameblo.jp","createdAt":"23.6.2021","updatedAt":"10.5.2021"},
      {"id":41,"name":"Kora","lastName":"Sim","email":"ksim14@state.tx.us","createdAt":"17.11.2020","updatedAt":"16.6.2021"},
      {"id":42,"name":"Aloise","lastName":"Rowthorne","email":"arowthorne15@mapy.cz","createdAt":"22.11.2020","updatedAt":"27.10.2020"},
      {"id":43,"name":"Katrine","lastName":"Clemenceau","email":"kclemenceau16@goo.gl","createdAt":"5.6.2021","updatedAt":"5.8.2021"},
      {"id":44,"name":"Lothario","lastName":"Chichgar","email":"lchichgar17@guardian.co.uk","createdAt":"7.8.2021","updatedAt":"21.8.2021"},
      {"id":45,"name":"Scottie","lastName":"Nursey","email":"snursey18@google.co.uk","createdAt":"7.10.2021","updatedAt":"2.9.2021"},
      {"id":46,"name":"Paolo","lastName":"Pearcey","email":"ppearcey19@nydailynews.com","createdAt":"11.4.2021","updatedAt":"9.9.2021"},
      {"id":47,"name":"Brande","lastName":"Danforth","email":"bdanforth1a@ocn.ne.jp","createdAt":"20.6.2021","updatedAt":"2.3.2021"},
      {"id":48,"name":"Barrie","lastName":"Janssens","email":"bjanssens1b@squarespace.com","createdAt":"20.12.2020","updatedAt":"3.3.2021"},
      {"id":49,"name":"Vonnie","lastName":"Kaye","email":"vkaye1c@java.com","createdAt":"25.3.2021","updatedAt":"4.8.2021"},
      {"id":50,"name":"Stormie","lastName":"Dyke","email":"sdyke1d@gmpg.org","createdAt":"22.3.2021","updatedAt":"3.6.2021"},
      {"id":51,"name":"Cherie","lastName":"Mease","email":"cmease1e@spotify.com","createdAt":"26.5.2021","updatedAt":"18.3.2021"},
      {"id":52,"name":"Joice","lastName":"Human","email":"jhuman1f@guardian.co.uk","createdAt":"4.1.2021","updatedAt":"15.12.2020"},
      {"id":53,"name":"Laraine","lastName":"Pinnell","email":"lpinnell1g@google.com.br","createdAt":"17.10.2021","updatedAt":"20.3.2021"},
      {"id":54,"name":"Ezekiel","lastName":"Euels","email":"eeuels1h@example.com","createdAt":"17.9.2021","updatedAt":"21.3.2021"},
      {"id":55,"name":"Jessika","lastName":"Flowerden","email":"jflowerden1i@typepad.com","createdAt":"12.3.2021","updatedAt":"28.2.2021"},
      {"id":56,"name":"Llywellyn","lastName":"Jeness","email":"ljeness1j@oakley.com","createdAt":"28.1.2021","updatedAt":"25.2.2021"},
      {"id":57,"name":"Batsheva","lastName":"Hardcastle","email":"bhardcastle1k@examiner.com","createdAt":"25.12.2020","updatedAt":"18.2.2021"},
      {"id":58,"name":"Gustavo","lastName":"Dishman","email":"gdishman1l@tumblr.com","createdAt":"14.10.2021","updatedAt":"2.10.2021"},
      {"id":59,"name":"Griffin","lastName":"Tunniclisse","email":"gtunniclisse1m@sfgate.com","createdAt":"14.6.2021","updatedAt":"31.12.2020"},
      {"id":60,"name":"Kean","lastName":"Benyan","email":"kbenyan1n@t.co","createdAt":"1.4.2021","updatedAt":"11.10.2021"},
      {"id":61,"name":"Gary","lastName":"Smooth","email":"gsmooth1o@prlog.org","createdAt":"7.12.2020","updatedAt":"16.6.2021"},
      {"id":62,"name":"Aeriela","lastName":"Salliere","email":"asalliere1p@networkadvertising.org","createdAt":"27.9.2021","updatedAt":"16.8.2021"},
      {"id":63,"name":"Alasdair","lastName":"Speare","email":"aspeare1q@sphinn.com","createdAt":"9.7.2021","updatedAt":"24.2.2021"},
      {"id":64,"name":"Matti","lastName":"Cavy","email":"mcavy1r@hhs.gov","createdAt":"29.9.2021","updatedAt":"25.11.2020"},
      {"id":65,"name":"Vinson","lastName":"Awcoate","email":"vawcoate1s@answers.com","createdAt":"25.4.2021","updatedAt":"29.7.2021"},
      {"id":66,"name":"Avie","lastName":"Shapter","email":"ashapter1t@ucoz.com","createdAt":"20.9.2021","updatedAt":"11.9.2021"},
      {"id":67,"name":"Putnam","lastName":"Moriarty","email":"pmoriarty1u@dropbox.com","createdAt":"27.3.2021","updatedAt":"23.1.2021"},
      {"id":68,"name":"Mordy","lastName":"Bew","email":"mbew1v@berkeley.edu","createdAt":"20.5.2021","updatedAt":"13.9.2021"},
      {"id":69,"name":"Remy","lastName":"Jobbins","email":"rjobbins1w@army.mil","createdAt":"4.6.2021","updatedAt":"14.5.2021"},
      {"id":70,"name":"Clemmy","lastName":"Shambrooke","email":"cshambrooke1x@pen.io","createdAt":"10.5.2021","updatedAt":"6.5.2021"},
      {"id":71,"name":"Jayne","lastName":"Gyford","email":"jgyford1y@joomla.org","createdAt":"27.5.2021","updatedAt":"25.2.2021"},
      {"id":72,"name":"Reuven","lastName":"Wethers","email":"rwethers1z@merriam-webster.com","createdAt":"25.4.2021","updatedAt":"1.7.2021"},
      {"id":73,"name":"Cicily","lastName":"Orringe","email":"corringe20@tmall.com","createdAt":"1.2.2021","updatedAt":"9.11.2020"},
      {"id":74,"name":"Vidovic","lastName":"Kubecka","email":"vkubecka21@bigcartel.com","createdAt":"24.7.2021","updatedAt":"29.9.2021"},
      {"id":75,"name":"Teodoro","lastName":"Littlewood","email":"tlittlewood22@ezinearticles.com","createdAt":"6.11.2020","updatedAt":"15.12.2020"},
      {"id":76,"name":"Lynn","lastName":"Legrave","email":"llegrave23@constantcontact.com","createdAt":"13.6.2021","updatedAt":"2.1.2021"},
      {"id":77,"name":"Roch","lastName":"Brosoli","email":"rbrosoli24@walmart.com","createdAt":"1.2.2021","updatedAt":"24.10.2021"},
      {"id":78,"name":"Frannie","lastName":"Loalday","email":"floalday25@cyberchimps.com","createdAt":"12.10.2021","updatedAt":"13.10.2021"},
      {"id":79,"name":"Marina","lastName":"Valenta","email":"mvalenta26@marriott.com","createdAt":"11.7.2021","updatedAt":"29.9.2021"},
      {"id":80,"name":"Serge","lastName":"Lorrimer","email":"slorrimer27@clickbank.net","createdAt":"14.7.2021","updatedAt":"5.1.2021"},
      {"id":81,"name":"Hugibert","lastName":"Flucker","email":"hflucker28@bandcamp.com","createdAt":"3.8.2021","updatedAt":"9.10.2021"},
      {"id":82,"name":"Matthias","lastName":"Haistwell","email":"mhaistwell29@latimes.com","createdAt":"23.2.2021","updatedAt":"26.3.2021"},
      {"id":83,"name":"Hoyt","lastName":"Bielfelt","email":"hbielfelt2a@dailymotion.com","createdAt":"27.6.2021","updatedAt":"7.9.2021"},
      {"id":84,"name":"Izaak","lastName":"Oliver-Paull","email":"ioliverpaull2b@hostgator.com","createdAt":"28.2.2021","updatedAt":"30.1.2021"},
      {"id":85,"name":"Jerri","lastName":"Camidge","email":"jcamidge2c@technorati.com","createdAt":"6.9.2021","updatedAt":"20.11.2020"},
      {"id":86,"name":"Izzy","lastName":"Edmondson","email":"iedmondson2d@salon.com","createdAt":"5.8.2021","updatedAt":"17.12.2020"},
      {"id":87,"name":"Ami","lastName":"Branscombe","email":"abranscombe2e@un.org","createdAt":"30.12.2020","updatedAt":"2.8.2021"},
      {"id":88,"name":"Tiebold","lastName":"Sare","email":"tsare2f@census.gov","createdAt":"21.8.2021","updatedAt":"8.8.2021"},
      {"id":89,"name":"Kessiah","lastName":"Walewicz","email":"kwalewicz2g@stumbleupon.com","createdAt":"1.8.2021","updatedAt":"4.3.2021"},
      {"id":90,"name":"Evelyn","lastName":"Poynor","email":"epoynor2h@topsy.com","createdAt":"4.6.2021","updatedAt":"21.8.2021"},
      {"id":91,"name":"Damian","lastName":"Weerdenburg","email":"dweerdenburg2i@so-net.ne.jp","createdAt":"24.12.2020","updatedAt":"5.3.2021"},
      {"id":92,"name":"Kaja","lastName":"Tytterton","email":"ktytterton2j@comcast.net","createdAt":"29.1.2021","updatedAt":"10.9.2021"},
      {"id":93,"name":"Jareb","lastName":"Fieldsend","email":"jfieldsend2k@youtu.be","createdAt":"11.9.2021","updatedAt":"24.5.2021"},
      {"id":94,"name":"Yurik","lastName":"Idwal Evans","email":"yidwalevans2l@csmonitor.com","createdAt":"26.6.2021","updatedAt":"14.4.2021"},
      {"id":95,"name":"Aubine","lastName":"Milliere","email":"amilliere2m@usatoday.com","createdAt":"23.6.2021","updatedAt":"16.10.2021"},
      {"id":96,"name":"Massimo","lastName":"Sleford","email":"msleford2n@whitehouse.gov","createdAt":"25.1.2021","updatedAt":"18.3.2021"},
      {"id":97,"name":"Binnie","lastName":"Stouther","email":"bstouther2o@cdbaby.com","createdAt":"22.2.2021","updatedAt":"1.1.2021"},
      {"id":98,"name":"Alys","lastName":"Prover","email":"aprover2p@yale.edu","createdAt":"21.9.2021","updatedAt":"9.4.2021"},
      {"id":99,"name":"Rasla","lastName":"Bellam","email":"rbellam2q@homestead.com","createdAt":"16.2.2021","updatedAt":"30.4.2021"},
      {"id":100,"name":"Delmer","lastName":"Meir","email":"dmeir2r@senate.gov","createdAt":"21.10.2021","updatedAt":"1.5.2021"}] , {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
