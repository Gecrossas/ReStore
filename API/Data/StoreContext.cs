namespace API.Data;

using API.Entities;
using Microsoft.EntityFrameworkCore;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
}