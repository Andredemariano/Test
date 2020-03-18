﻿using System;
using MessageManager.Model;

namespace MessageManager.Design
{
    public class DesignDataService : IDataService
    {
        public void GetData(Action<DataItem, Exception> callback)
        {
            // Use this to create design time data

            var item = new DataItem("Welcome to MVVM Light [design]11");
            callback(item, null);
        }
    }
}