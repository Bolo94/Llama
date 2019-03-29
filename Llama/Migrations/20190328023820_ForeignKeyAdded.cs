using Microsoft.EntityFrameworkCore.Migrations;

namespace Llama.Migrations
{
    public partial class ForeignKeyAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "IdUser",
                table: "Avatars",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Avatars_IdUser",
                table: "Avatars",
                column: "IdUser");

            migrationBuilder.AddForeignKey(
                name: "FK_Avatars_AspNetUsers_IdUser",
                table: "Avatars",
                column: "IdUser",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Avatars_AspNetUsers_IdUser",
                table: "Avatars");

            migrationBuilder.DropIndex(
                name: "IX_Avatars_IdUser",
                table: "Avatars");

            migrationBuilder.AlterColumn<int>(
                name: "IdUser",
                table: "Avatars",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
