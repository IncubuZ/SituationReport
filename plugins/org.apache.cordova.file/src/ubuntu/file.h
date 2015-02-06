/*
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

#ifndef FILEAPI_H_SDASDASDAS
#define FILEAPI_H_SDASDASDAS

#include <QNetworkReply>
#include <QtCore>

#include <cplugin.h>
#include <cordova.h>

class File: public CPlugin {
    Q_OBJECT
public:
    explicit File(Cordova *cordova);

    virtual const QString fullName() override {
        return File::fullID();
    }

    virtual const QString shortName() override {
        return "File";
    }

    static const QString fullID() {
        return "File";
    }
<<<<<<< HEAD
    QPair<bool, QFileInfo> resolveURI(const QString &uri);
    QPair<bool, QFileInfo> resolveURI(int ecId, const QString &uri);
    QVariantMap file2map(const QFileInfo &dir);

public slots:
    void requestFileSystem(int scId, int ecId, unsigned short type, unsigned long long size);
    void resolveLocalFileSystemURI(int scId, int ecId, const QString&);
    void getDirectory(int scId, int ecId, const QString&, const QString&, const QVariantMap&);
    void getFile(int scId, int ecId, const QString &parentPath, const QString &rpath, const QVariantMap &options);
    void readEntries(int scId, int ecId, const QString &uri);
    void getParent(int scId, int ecId, const QString &uri);
    void copyTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName);
    void moveTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName);
    void getFileMetadata(int scId, int ecId, const QString &);
    void getMetadata(int scId, int ecId, const QString &);
    void remove(int scId, int ecId, const QString &);
    void removeRecursively(int scId, int ecId, const QString&);
    void write(int scId, int ecId, const QString&, const QString&, unsigned long long position, bool binary);
    void readAsText(int scId, int ecId, const QString&, const QString &encoding, int sliceStart, int sliceEnd);
    void readAsDataURL(int scId, int ecId, const QString&, int sliceStart, int sliceEnd);
    void readAsArrayBuffer(int scId, int ecId, const QString&, int sliceStart, int sliceEnd);
    void readAsBinaryString(int scId, int ecId, const QString&, int sliceStart, int sliceEnd);
    void truncate(int scId, int ecId, const QString&, unsigned long long size);

    void _getLocalFilesystemPath(int scId, int ecId, const QString&);
private:
    void moveFile(int scId, int ecId,const QString&, const QString&, const QString&);
    void moveDir(int scId, int ecId,const QString&, const QString&, const QString&);
    bool copyFile(int scId, int ecId, const QString&, const QString&, const QString&);
    void copyDir(int scId, int ecId, const QString&, const QString&, const QString&);
    bool rmDir(const QDir &dir);
    bool copyFolder(const QString&, const QString&);

    QPair<QString, QString> GetRelativePath(const QFileInfo &fileInfo);
    QVariantMap dir2map(const QDir &dir);

    QMimeDatabase _db;
    const QDir _persistentDir;
=======

public slots:
    void requestFileSystem(int scId, int ecId, unsigned short type, unsigned long long size);
    void resolveLocalFileSystemURI(int scId, int ecId, QString uri);
    void getDirectory(int scId, int ecId, QString parentPath, QString path, QVariantMap options);
    void getFile(int scId, int ecId, const QString &parentPath, const QString &rpath, const QVariantMap &options);
    void readEntries(int scId, int ecId, QString path);
    void getParent(int scId, int ecId, QString path);
    void copyTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName);
    void moveTo(int scId, int ecId, const QString& source, const QString& destinationDir, const QString& newName);
    void getFileMetadata(int scId, int ecId, const QString &path);
    void getMetadata(int scId, int ecId, const QString &path);
    void remove(int scId, int ecId, QString path);
    void removeRecursively(int scId, int ecId, QString path);
    void readAsText(int scId, int ecId, const QString &path, const QString &encoding, int sliceStart, int sliceEnd);
    void write(int scId, int ecId, const QString &path, const QString &_data, unsigned long long position, bool binary);
    void readAsDataURL(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd);
    void readAsArrayBuffer(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd);
    void readAsBinaryString(int scId, int ecId, const QString &path, int sliceStart, int sliceEnd);
    void truncate(int scId, int ecId, const QString &path, unsigned long long size);
private:
    void moveFile(int scId, int ecId,const QString& sourceFile, const QString& destinationParentDir, const QString& newName);
    void moveDir(int scId, int ecId,const QString& sourceFolder, const QString& destFolder, const QString& newName);
    bool copyFile(int scId, int ecId, const QString& sourceFile, const QString& destinationParentDir, const QString& newName);
    void copyDir(int scId, int ecId, const QString& sourceFolder, const QString& destFolder, const QString& newName);
    bool rmDir(QDir dir);
    bool copyFolder(const QString& sourceFolder, const QString& destFolder);

    QMimeDatabase _db;
    const QString _persistentDir;
>>>>>>> origin/master
    QNetworkAccessManager _manager;
};

#endif
