using Microsoft.EntityFrameworkCore.Migrations;

namespace Llama.Migrations
{
    public partial class AvatarIDAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdAvatar",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdAvatar",
                table: "AspNetUsers");
        }
    }
}
