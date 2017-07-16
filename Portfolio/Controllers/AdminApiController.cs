using Microsoft.AspNet.Identity.Owin;
using Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Cors;
using System.Web.Http.Routing;

namespace Portfolio.Controllers
{
    [Authorize]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AdminApiController : ApiController
    {
        // GET: api/AdminApi
        public IEnumerable<InfoMsg> Get()
        {
            using (portfolioEntities port = new portfolioEntities())
            {
                var listMessages = port.InfoMsg.Select(x => x).ToList();
                return listMessages;
            }

        }

        // GET: api/AdminApi/5
        public InfoMsg Get(int id)
        {
            using (portfolioEntities port = new portfolioEntities())
            {
                var message = port.InfoMsg.SingleOrDefault(x=>x.Id==id);
                return message;
            }
        }

        //Add request
        // POST: api/AdminApi
        public void Post([FromBody]string value)
        {

        }

        //Update request
        // PUT: api/AdminApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AdminApi/5
        public void Delete(int id)
        {
            using (portfolioEntities port = new portfolioEntities())
            {
                var message = port.InfoMsg.SingleOrDefault(x => x.Id == id);
                if (message != null)
                {
                    port.InfoMsg.Remove(message);
                    port.SaveChanges();
                }
            }
        }

    }
}
