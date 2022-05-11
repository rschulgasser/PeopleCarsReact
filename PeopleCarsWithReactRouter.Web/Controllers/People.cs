using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PeopleCarsWithReactRouter.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeopleCarsWithReactRouter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
       
            private readonly string _connectionString;

            public PeopleController(IConfiguration configuration)
            {
                _connectionString = configuration.GetConnectionString("ConStr");
            }

            [Route("getall")]
            public List<Person> GetAll()
            {
                var repo = new PeopleCarsRepository(_connectionString);
                return repo.GetAll();
            }
            [HttpPost]
            [Route("add")]
            public void Add(Person person)
            {
                var repo = new PeopleCarsRepository(_connectionString);
                repo.Add(person);
            }
        [HttpPost]
        [Route("addacar")]
       
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
          
            repo.AddCar(car);
        }

        [HttpPost]
        [Route("deletecars")]

        public void DeleteCars(DeleteCarsVM vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);

            repo.DeleteCars(vm.PersonId);
        }


        [Route("getcars")]
        public List<Car> GetCars(int personId)
        {
            var repo = new PeopleCarsRepository(_connectionString);

           return repo.GetCars(personId);
        }
        [HttpGet]
        [Route("getbyid")]
        public Person GetById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetById(id);
        }
    } 
        
}
