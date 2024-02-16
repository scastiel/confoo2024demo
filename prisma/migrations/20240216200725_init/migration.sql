-- CreateTable
CREATE TABLE "UserFavorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "movieId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFavorite_email_movieId_key" ON "UserFavorite"("email", "movieId");
