using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCarsWithReactRouter.Data

{
    public class PeopleDataContext : DbContext
    {
        private readonly string _connectionString;

        public PeopleDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}
