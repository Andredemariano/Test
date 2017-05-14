using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Portfolio.Models;

namespace Portfolio.Services
{
    public class DbAccessService
    {
        portfolioEntities context;
        public DbAccessService()
        {
            context = new portfolioEntities();
        }

        public void AddMessage(InfoMsg msg)
        {
            context.InfoMsg.Add(msg);
            context.SaveChanges();
        }
        
    }
}