using Microsoft.EntityFrameworkCore.Migrations;

namespace Llama.Migrations
{
    public partial class DefaultDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdAvatar",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdAvatar",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);
        }
    }
}
