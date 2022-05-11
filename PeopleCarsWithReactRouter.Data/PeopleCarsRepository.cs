using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCarsWithReactRouter.Data
{
    public class PeopleCarsRepository
    {
      
            private readonly string _connectionString;

            public PeopleCarsRepository(string connectionString)
            {
                _connectionString = connectionString;
            }

            public List<Person> GetAll()
            {
                using var context = new PeopleDataContext(_connectionString);
                return context.People.Include(p => p.Cars).ToList();
            }
        public void Add(Person person)
        {
            using var context = new PeopleDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void AddCar(Car car)
        {

            using var context = new PeopleDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public void DeleteCars(int personId)
        {
            using var context = new PeopleDataContext(_connectionString);

            context.Database.ExecuteSqlInterpolated($"DELETE FROM cars WHERE personId={personId}");
            context.SaveChanges();
        }
        public List<Car> GetCars(int personId)
        {
            using var context = new PeopleDataContext(_connectionString);
            var cars=context.Cars.Where(c=>personId==c.PersonId).ToList();
            return cars;
        }
        public Person GetById(int id)
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }


    }
}