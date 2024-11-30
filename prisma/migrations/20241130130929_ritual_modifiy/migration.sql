/*
  Warnings:

  - Added the required column `updated_at` to the `Ritual` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ritual" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "start" DATETIME NOT NULL,
    "end" DATETIME NOT NULL,
    "time" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Ritual_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ritual" ("category", "content", "end", "id", "period", "photo", "price", "start", "subtitle", "time", "title", "userId") SELECT "category", "content", "end", "id", "period", "photo", "price", "start", "subtitle", "time", "title", "userId" FROM "Ritual";
DROP TABLE "Ritual";
ALTER TABLE "new_Ritual" RENAME TO "Ritual";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
